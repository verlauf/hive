import {defineStore} from "pinia";

export const useGridStore = defineStore("grid", {
  state: () => ({
    columns: 3, // default
    isGridView: true,
    isGalleryViewGrid: true,
    isGridPanelVisible: true,
  }),
  actions: {
    setColumns(cols: number): void {
      this.isGalleryViewGrid = true;
      this.columns = cols;
    },
    setGalleryListView(): void {
      this.isGalleryViewGrid = false;
    },
    showGridPanel() {
      this.isGridPanelVisible = true;
    },
    hideGridPanel() {
      this.isGridPanelVisible = false;
    },
    resetColumns(): void {
      this.$reset();
    }
  }
});
