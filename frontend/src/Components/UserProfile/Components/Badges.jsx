import React from 'react';
import { Grid, Image, List } from "semantic-ui-react";

const Badges = ({ badges }) => {
    return (
        <Grid.Column className="badges" verticalAlign="middle" textAlign="left">
            <h3>Achievements</h3>
            <List horizontal relaxed>
                <List.Item>
                    <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                    <List.Content>
                        <List.Header>1st task</List.Header>
                        For completing your first task!
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                    <List.Content>
                        <List.Header>1st KP</List.Header>
                        You earned your first Karma Point!
                    </List.Content>
                </List.Item>
                <List.Item>
                    <Image avatar src='https://images.vexels.com/media/users/3/127646/isolated/preview/bb4029ca0e2f6ffb36a5c80dba5e54e0-first-place-round-badge-by-vexels.png' />
                    <List.Content>
                        <List.Header>Good Karma</List.Header>
                        You earned 5 KP
                    </List.Content>
                </List.Item>
            </List>
        </Grid.Column>
    )
}

export default Badges;