    import React from 'react';

    const SubscriptionForm = ({handleSubmit}) => {


    return (
        <div className="input-group">
        <input
            type="email"
            className="input"
            id="Email"
            name="Email"
            placeholder="uiverse@verse.io"
            autoComplete="off"
        />
        <input
            className="button--submit"
            value="Subscribe"
            type="submit"
            onClick={handleSubmit}
        />
        </div>
    );
    };

    export default SubscriptionForm;
