// Import
// Mock
// Test
    // Arrange
    // Act
    // Assert

/********************************** Import *******************************/
// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker (You can use axiosMock or jest.spyOn)
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// import react-testing methods
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

// the component to test
import OrderHistory from './OrderHistory'


/********************************** Mock *******************************/
const URL = 'https://udemy-react-94dcc-default-rtdb.firebaseio.com/orders.json'
const mockResponse = {
    "-MQzt1mug0qlvKcJIIR1": {
        "ingredients": {
            "bacon": 1,
            "cheese": 1,
            "meat": 3,
            "salad": 2
        },
        "orderId": "2570b463-0324-49a8-9c1c-70cf7d82aa8e",
        "price": "7.00",
        "timestamp": 1610610912075
    }
}
const emptyMockResponse = {}

// declare which API requests to mock
const server = setupServer(
    // capture "GET /orders" requests
    rest.get(URL, (req, res, ctx) => {
        // respond using a mocked JSON body
        return res(ctx.json(mockResponse))
    })
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())
// Unmount React trees that were mounted with render
afterEach(cleanup)

/********************************** Test *******************************/

test.skip('initial render', async () => {
    /* Arrange */
    // The `render` method renders a React element into the DOM.
    const { container } = render(<OrderHistory />)

    /* Act */
    // Do nothing

    /* Assert */
    // Test that there is a button with data-testid="fetchButton" & className="buttonClass"
    const button = await screen.findByTestId('fetchButton')
    //expect(button).toHaveClass('buttonClass')
    expect(button.className).toContain('MuiButton-containedPrimary')
    // Test if there is a button with a label `Fetch Orders`
    expect(screen.getByTestId('fetchButton')).toHaveTextContent('Fetch Orders') //Case-sensitive by default, use actual text from HTML
    expect(screen.getByRole('button', { name: /fetch orders/i })) //using RegExp
    // Test that the button is visible & enabled
    expect(screen.getByText('Fetch Orders')).toBeVisible()
    expect(screen.getByTestId('fetchButton')).not.toHaveAttribute('disabled')
    // Test that datatale is not part of the dom
    expect(screen.queryByTestId('datatable')).not.toBeInTheDocument()
    // Create a snapshot
    expect(container).toMatchSnapshot()
})

test.skip('loads and displays orders', async () => {
    /* Arrange */
    // The `render` method renders a React element into the DOM.
    const { container, getByText, debug } = render(<OrderHistory />)
    //debug()

    /* Act */
    //The `fireEvent` method allows you to fire events to simulate user actions.
    //const button = screen.getByRole('button', { name: 'Fetch Orders' })
    fireEvent.click(getByText('Fetch Orders'))

    // wait until the `get` request promise resolves and the component calls setState and re-renders.
    // `waitFor` waits until the callback doesn't throw an error
    // wait for appearance inside an assertion
    await waitFor(() => expect(screen.getByTestId('datatable')).toBeInTheDocument(), { timeout: 2000 })
    // await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))

    /* Assert */
    expect(getByText('OrderId')).toBeInTheDocument()
    expect(container.children).toHaveLength(1)
    expect(getByText("Found 1 order(s).")).toBeInTheDocument()
})

test.skip('handles empty response', async () => {
    server.use(
        rest.get(URL, (req, res, ctx) => {
            return res(ctx.json(emptyMockResponse))
        })
    )

    render(<OrderHistory />)

    fireEvent.click(screen.getByText('Fetch Orders'))
    await waitFor(() => expect(screen.getByText("Found No order(s).")).toBeInTheDocument(), { timeout: 2000 })
})

test.skip('handles server error', async () => {
    server.use(
        rest.get(URL, (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )

    render(<OrderHistory />)

    fireEvent.click(screen.getByText('Fetch Orders'))
    await waitFor(() => expect(screen.getByText("Found No order(s).")).toBeInTheDocument(), { timeout: 2000 })
})