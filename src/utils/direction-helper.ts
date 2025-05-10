export const getDocumentDirection = (): "rtl" | "ltr" => {
    if (typeof document === "undefined") return "ltr";
    const dir = document?.dir?.toLowerCase();
    return dir === "rtl" ? "rtl" : "ltr";
};  