import { HOME_TABS } from "constants";

export const getTabFilters = (tabKey) => HOME_TABS.find(({ key }) => key === tabKey)?.filters || [];
