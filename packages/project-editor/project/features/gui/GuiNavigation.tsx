import React from "react";
import { observer } from "mobx-react";

import { MenuNavigation } from "project-editor/project/ui/MenuNavigation";
import { NavigationComponent, getProperty } from "eez-studio-shared/model/object";
import { ProjectStore } from "project-editor/core/store";

////////////////////////////////////////////////////////////////////////////////

@observer
export class GuiNavigation extends NavigationComponent {
    render() {
        return (
            <MenuNavigation
                id={this.props.id}
                navigationObject={getProperty(ProjectStore.project, "gui")}
                content={this.props.content}
            />
        );
    }
}
