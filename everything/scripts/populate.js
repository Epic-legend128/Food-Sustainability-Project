function filterRecipes() {
    let url = new URL(location.href);
    url.searchParams.set("healthy", $("#healthy").is(":checked"));
    url.searchParams.set("quick", $("#quick").is(":checked"));
    url.searchParams.set("seasonal", $("#seasonal").is(":checked"));
    url.searchParams.set("search", $("#searchbar").val());
    location.href = url.href;
}