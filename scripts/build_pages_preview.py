#!/usr/bin/env python3
"""Build a small, brand-spanning data preview for the GitHub Pages directory."""

import json
import sys
from pathlib import Path

PREVIEW_LIMIT = 200


def select_models(models: list[dict]) -> list[dict]:
    """Cover each brand first, then retain source order up to the preview limit."""
    selected: list[dict] = []
    selected_ids: set[str] = set()
    seen_brands: set[str] = set()
    for model in models:
        brand = model.get("brand")
        if brand and brand not in seen_brands:
            selected.append(model)
            selected_ids.add(str(model.get("id")))
            seen_brands.add(brand)
    for model in models:
        if len(selected) >= PREVIEW_LIMIT:
            break
        identifier = str(model.get("id"))
        if identifier not in selected_ids:
            selected.append(model)
            selected_ids.add(identifier)
    return selected[:PREVIEW_LIMIT]


def main(source: str, destination: str) -> None:
    data = json.loads(Path(source).read_text(encoding="utf-8"))
    models = data.get("models", {}).get("list", [])
    preview_models = select_models(models)
    preview = {
        "meta": data.get("meta", {}),
        "brands": data.get("brands", []),
        "glossary": data.get("glossary", {}),
        "models": {
            "list": preview_models,
            "cross_market": data.get("models", {}).get("cross_market", []),
        },
        "preview": {
            "is_partial": True,
            "loaded_models": len(preview_models),
            "total_models": len(models),
        },
    }
    output = Path(destination)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(preview, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: build_pages_preview.py SOURCE DESTINATION")
    main(*sys.argv[1:])
