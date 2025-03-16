import { defineStore } from "pinia";

export const useGridStore = defineStore("grid", {
    state: () => ({
        columns: 3 // default
    }),
    actions: {
        setColumns(cols: number) {
            this.columns = cols;
        },
        resetColumns() {
            this.$reset();
        }
    }

});