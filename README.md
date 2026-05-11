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

## Build and Install (local)

You only need to copy the **built output** plus the manifest into your vault plugin folder.

1. Install dependencies (one-time):

   ```bash
   npm install
   ```

2. Build:

   ```bash
   npm run build
   ```

   This bundles `main.ts` into `main.js` (CommonJS) for Obsidian plugin loading.

3. Create plugin folder in your vault:

   ```bash
   mkdir -p "<vault>/.obsidian/plugins/copy-path-line-range"
   ```

4. Copy these files into that folder:

   - `manifest.json`
   - `main.js`

   Example:

   ```bash
   cp manifest.json main.js "<vault>/.obsidian/plugins/copy-path-line-range/"
   ```

5. In Obsidian: **Settings → Community plugins → Reload plugins** (or restart Obsidian), then enable **Copy Path Line Range**.

## Development notes

- Source file you edit: `main.ts`
- Generated file Obsidian loads: `main.js`
