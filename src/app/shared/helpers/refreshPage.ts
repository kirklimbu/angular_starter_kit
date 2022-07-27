export function refreshPage() {
  console.log("refreshPage", this._router);
  this._router.routeReuseStrategy.shouldReuseRoute = () => false;
  this._router.onSameUrlNavigation = "reload";
  return this._router.navigate([this._router.url]);
}
