import React from "react"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

import Homepage from "../../pages/index"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Introduce, Andrel`,
          description: `My profile website, so you can more enjoy to look my profile`,
          author: `@gaweki|@functionandrel`
        },
      },
    })
  )
})


describe("Homepage", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Homepage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})