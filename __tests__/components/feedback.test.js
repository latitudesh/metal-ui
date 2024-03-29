import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Feedback from "../../src/Feedback";
import Button from "../../src/Button";

const testEndpoint = "http://test-endpoint.local";

describe("Feedback", () => {
    test("opens form on click", async () => {
        render(
            <Feedback />
        );

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));

        await waitFor(() => screen.getByText("Email"));

        expect(screen.getByLabelText("Email")).toHaveValue("");
    });

    test("closes form on clicking outside", async () => {
        render(
            <div data-testid="feedback-wrapper">
                <Feedback />
            </div>
        );

        expect(screen.queryByTestId("form")).not.toBeInTheDocument();
        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        expect(screen.getByTestId("form")).toBeInTheDocument();
        userEvent.click(screen.queryByTestId("feedback-wrapper"));
        expect(screen.queryByTestId("form")).not.toBeInTheDocument();

    });

    test("closes form on hitting escape", async () => {
        render(<div>
            Outside
            <Feedback>
            </Feedback>
        </div>);

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        expect(screen.queryByTestId("form")).toBeInTheDocument();
        fireEvent.keyDown(screen.getByLabelText("Feedback"), { key: "Escape", code: "Escape" });
        expect(screen.queryByTestId("form")).not.toBeInTheDocument();
    });

    test("submits form on hitting enter key with meta key", async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() });
        });
        global.fetch = fetchMock;

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} >
            </Feedback>
        </div>);

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@email.com" } });
        fireEvent.change(screen.getByLabelText("Feedback"), { target: { value: "This is great!" } });

        userEvent.type(screen.getByLabelText("Feedback"), "{meta}{enter}");

        await waitFor(() => screen.getByText("Your feedback has been received!"));
        const body = {
            url: testEndpoint,
            note: "This is great!",
            email: "test@email.com",
        };
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    });

    test("submits form with keyboard navigation", async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() });
        });
        global.fetch = fetchMock;

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} >
            </Feedback>
        </div>);

        screen.getByRole("button", { name: "Feedback" }).focus();
        userEvent.keyboard("{Enter}test@email.com");
        userEvent.tab();
        // Enter feedback
        userEvent.keyboard("This is great!");
        // Tab to emoji radio button
        userEvent.tab();
        // Select the emoji radio then use right arrow to select the next one
        userEvent.keyboard("{ArrowRight}");
        userEvent.tab();
        userEvent.keyboard("{Enter}");

        await waitFor(() => screen.getByText("Your feedback has been received!"));
        const body = {
            url: testEndpoint,
            note: "This is great!",
            email: "test@email.com",
            emotion: "🙂"
        };
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    });

    test("dont show inputs in case of error", async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve() });
        });
        global.fetch = fetchMock;
        render(<div>
            Outside
            <Feedback url={testEndpoint} >
            </Feedback>
        </div>);

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        fireEvent.change(screen.getByLabelText("Email"), { target: { value: "test@email.com" } });
        fireEvent.change(screen.getByLabelText("Feedback"), { target: { value: "This is great!" } });

        userEvent.type(screen.getByLabelText("Feedback"), "{meta}{enter}");

        await waitFor(() => screen.getByText("Sorry, we couldn't send your feedback. Status: 404"));
        expect(screen.queryByLabelText("Email")).not.toBeInTheDocument();
        expect(screen.queryByLabelText("Feedback")).not.toBeInTheDocument();
        const body = {
            url: testEndpoint,
            note: "This is great!",
            email: "test@email.com",
        };
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    });

    test("submits form correctly if email is provided as a prop", async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() });
        });
        global.fetch = fetchMock;

        // TODO what happens when enter is hit elsewhere?
        render(<div>
            Outside
            <Feedback url={testEndpoint} email={"prop@email.com"} >
            </Feedback>
        </div>);

        expect(
            screen.queryByLabelText("Email"),
        ).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        fireEvent.change(screen.getByLabelText("Feedback"), { target: { value: "This is great!" } });

        userEvent.type(screen.getByLabelText("Feedback"), "{meta}{enter}");

        await waitFor(() => screen.getByText("Your feedback has been received!"));
        const body = {
            url: testEndpoint,
            note: "This is great!",
            email: "prop@email.com",
        };
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    });

    test("works with custom triggers", async () => {
        const fetchMock = jest.fn((url) => {
            return Promise.resolve({ ok: true, json: () => Promise.resolve() });
        });
        global.fetch = fetchMock;

        render(<div>
            Outside
            <Feedback url={testEndpoint} email={"prop@email.com"} >
                {({ open, setOpen, ref }) => <Button ref={ref} onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }} label={"Feedback"} />}
            </Feedback>
        </div>);

        expect(
            screen.queryByLabelText("Email"),
        ).not.toBeInTheDocument();

        fireEvent.click(screen.getByRole("button", { name: "Feedback" }));
        fireEvent.change(screen.getByLabelText("Feedback"), { target: { value: "This is great!" } });

        userEvent.type(screen.getByLabelText("Feedback"), "{meta}{enter}");

        await waitFor(() => screen.getByText("Your feedback has been received!"));
        const body = {
            url: testEndpoint,
            note: "This is great!",
            email: "prop@email.com",
        };
        expect(fetchMock).toHaveBeenCalledWith(testEndpoint, {
            method: "POST",
            body: JSON.stringify(body),
        });
    });
});
