import {defineStore} from "pinia";


export const useGridStore = defineStore('gridStore', () => {
  const route = useRoute();
  const router = useRouter();

  const columns = ref(3); // default
  const isGridView = ref(true);
  const isGalleryViewGrid = ref(true);
  const isGridPanelVisible = ref(true);

  const setColumns = (cols: number) => {
    isGalleryViewGrid.value = true;
    columns.value = cols;
    console.log('route ', route)
    router.push({query: {...route.query, cols}})
  }
  const setGalleryListView = () => {
    isGalleryViewGrid.value = false;
  }
  const showGridPanel = () => {
    isGridPanelVisible.value = true;
  }
  const hideGridPanel = () => {
    isGridPanelVisible.value = false;
  }

  // const double = computed(() => counter.value * 2)

  return {
    columns,
    isGridView,
    isGalleryViewGrid,
    isGridPanelVisible,
    setGalleryListView,
    showGridPanel,
    hideGridPanel,
    setColumns
  }
})
