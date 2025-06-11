type env = "development" | "production";

const useGetEnvironment = (): env => {
    const hostname = typeof window !== "undefined" && window.location.hostname;

    switch (hostname) {
        case "localhost":
            return "development";
        case "alfan.web.id":
            return "production";
        default:
            return "development";
    }
};

export default useGetEnvironment;
