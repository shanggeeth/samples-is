/**
 * Copyright (c) 2025, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { FunctionComponent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { DefaultLayout } from "../layouts/default";

/**
 * Page to display for 404.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const NotFoundPage: FunctionComponent = (): ReactElement => {

    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <h3>
                404: Page not found
            </h3>
            <button className="btn primary" onClick={() => { navigate("/home") }}>Go back to home</button>
        </DefaultLayout>
    );
};
