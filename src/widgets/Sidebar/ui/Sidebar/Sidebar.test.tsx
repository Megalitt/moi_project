import { screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";


describe('Sidebar', () => {
  test('with', () => {
    componentRender(<Sidebar/>)
    expect(screen.getByAltText('TEST')).toBeInTheDocument();
  });
});
