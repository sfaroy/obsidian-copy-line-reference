import { Notice, Plugin } from "obsidian";

export default class CopyPathLineRangePlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "copy-path-with-line-range",
      name: "Copy path with line range",
      hotkeys: [{ modifiers: ["Alt"], key: "l" }],
      editorCallback: async (editor) => {
        const activeFilePath = this.app.workspace.getActiveFile()?.path;
        if (!activeFilePath) {
          new Notice("No active Markdown file.");
          return;
        }

        const normalizedPath = activeFilePath.replace(/\\/g, "/");

        const from = editor.getCursor("from");
        const to = editor.getCursor("to");

        const startLine = from.line + 1;
        const endLine = to.line + 1;

        const output =
          startLine === endLine
            ? `${normalizedPath}:${startLine}`
            : `${normalizedPath}:${startLine}-${endLine}`;

        await navigator.clipboard.writeText(output);
        new Notice(`Copied: ${output}`);
      },
    });
  }
}
