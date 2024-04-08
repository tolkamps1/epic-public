import { HOME_TABS } from "constants/home";

export const getTabFilters = (tabKey) => HOME_TABS.find(({ key }) => key === tabKey)?.filters || [];
