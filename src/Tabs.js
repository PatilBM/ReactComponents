import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "active_tab1": {
      return {
        ...state,
        tab1: "tab-active bg-secondary text-white",
        tab2: "",
        tab3: ""
      };
    }
    case "active_tab2": {
      return {
        ...state,
        tab2: "tab-active bg-secondary text-white",
        tab1: "",
        tab3: ""
      };
    }
    case "active_tab3": {
      return {
        ...state,
        tab3: "tab-active bg-secondary text-white",
        tab2: "",
        tab1: ""
      };
    }
  }
  throw Error("Unknown action.", action.type);
}

function Tabs() {
  const [state, dispatch] = useReducer(reducer, {
    tab1: "tab-active bg-secondary text-white",
    tab2: "",
    tab3: ""
  });

  return (
    <>
      <section className="tab-section bg-base-100 container mx-auto">
        <div className="tabs border-2 border-inherit bg-white w-fit">
          <button
            className={`tab px-16 border-current h-12 text-xl font-bold ${state.tab1}`}
            onClick={() => {
              dispatch({ type: "active_tab1" });
            }}
          >
            Today
          </button>
          <button
            className={`tab px-16 border-current h-12 text-xl font-bold ${state.tab2}`}
            onClick={() => {
              dispatch({ type: "active_tab2" });
            }}
          >
            Hourly
          </button>
          <button
            className={`tab px-16 border-current h-12 text-xl font-bold ${state.tab3}`}
            onClick={() => {
              dispatch({ type: "active_tab3" });
            }}
          >
            7 Days
          </button>
        </div>
        <div className="tabsdata bg-base-100">
          <div className={state.tab1 ? "block" : "hidden"}>
            <div className="flex flex-row gap-5 mt-8">
              <h1>Tab 1 content</h1>
            </div>
          </div>
          <div className={state.tab2 ? "block" : "hidden"}>
            <div className="flex flex-row gap-5 mt-8">
              <h1>Tab 2 content</h1>
            </div>
          </div>
          <div className={state.tab3 ? "block" : "hidden"}>
            <div className="flex flex-row gap-5 mt-8">
              <h1>Tab 3 content</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
