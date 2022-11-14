import useNearScreen from "hooks/useNearScreen";
import { lazy, Suspense } from "react";
import Spinner from "components/Spinner";

const TrendingSearches = lazy(() => import("components/TrendingSearches"));

function LazyTrendingSearch() {
  const { elementRef, show } = useNearScreen({ distance: "100px" });

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Spinner />}>
        {show ? <TrendingSearches /> : <Spinner />}
      </Suspense>
    </div>
  );
}

export default LazyTrendingSearch;
