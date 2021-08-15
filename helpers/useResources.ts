import useSWR from "swr";

export function useResources() {
    const { data, error } = useSWR(`/api/get/resources`);
    return {
        data: data,
        isLoading: !error && !data,
        error: error
    };
}