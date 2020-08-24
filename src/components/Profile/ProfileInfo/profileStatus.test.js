import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus test components", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Here wiil be status" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Here wiil be status");
    });

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="Here wiil be status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation span text contains correct status", () => {
        const component = create(<ProfileStatus status="Here wiil be status" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Here wiil be status");
    });

    test("input should be displayed in editMode instean of span", () => {
        const component = create(<ProfileStatus status="Here wiil be status" />);
        const root = component.root;
        let span = root.findByType('div');
        span = span.children[0];
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("Here wiil be status");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Here wiil be status" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactiveEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})