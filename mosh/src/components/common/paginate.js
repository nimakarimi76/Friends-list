export function paginate(items, currentPage, showInPage) {
  return items.slice(showInPage * (currentPage - 1), showInPage * currentPage);
}
