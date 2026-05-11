# Copy Path Line Range

An Obsidian community plugin that copies the active Markdown file's relative path with the current line or selected line range.

## Command

- **Copy path with line range**
- Default hotkey: **Alt+L**

## Behavior

- Works in Markdown editor views (via `editorCallback`).
- Uses active file path from `app.workspace.getActiveFile()?.path`.
- Converts selection to 1-based lines.
- Output examples:
  - Single line: `notes/todo.md:12`
  - Multi-line: `notes/todo.md:12-18`
- Empty selection uses current cursor line.
- Normalizes backslashes (`\\`) to `/`.
- Copies directly to clipboard and shows an Obsidian notice.

## Build

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build plugin:

   ```bash
   npm run build
   ```

3. Copy `manifest.json`, `main.js`, and any assets to your vault plugin folder:

   ```
   <vault>/.obsidian/plugins/copy-path-line-range/
   ```
