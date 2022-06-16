import useSWR from "swr";
import sortResources from "./sorter";

export function useResources() {
    const { data, error } = useSWR(`/api/get/resources`);
    const _data = sortResources(data)
    return {
        data: _data,
        isLoading: !error && !data,
        error: error
    };
}