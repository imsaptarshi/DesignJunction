import useSWR from "swr";

export function useSearchResources(query: String) {
    const { data, error } = useSWR(`/api/get/${query}`);
    return {
        data: data,
        isLoading: !error && !data,
        isError: error
    };
}