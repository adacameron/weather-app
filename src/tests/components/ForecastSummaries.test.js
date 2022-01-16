import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = {
    forecasts: [
      {
        date: 1634239360000,
        description: "Stub description-1",
        icon: 800,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 1634306291000,
        description: "Stub description-2",
        icon: "602",
        temperature: {
          max: 24,
          min: 15,
        },
      },
    ],
    onForecastSelect: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries
        forecasts={validProps.forecasts}
        onForecastSelect={validProps.onForecastSelect}
      />
    );

    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
    // uses getAllByTestId() to find the data-testid with the value of forecast-summary in the DOM that's rendered by <ForecastSummaries />
  });
});
