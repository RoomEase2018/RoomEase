import React from "react";
import { Grid, Item, Image, Segment } from "semantic-ui-react";

const UserSnapshot = ({ username, userPic, userRoomKarma, userTask }) => (
  <Grid.Column className="user-snapshot" width={8}>
    <h2>Welcome back, {username}!</h2>
    <Item.Group>
      <Item>
        <Item.Image size="small" circular src={userPic} />

        <Item.Content>
          <Item.Header>Your Snapshot</Item.Header>
          <Item.Description>
            <Segment compact color="pink">
              <span>{username}</span> <br />
              <span>{userRoomKarma} Karma Points</span> <br />
              <span>Upcoming Task: {`${userTask[0].desc} ${userTask[0].date}`}</span>
            </Segment>
          </Item.Description>
        </Item.Content>

      </Item>
    </Item.Group>
  </Grid.Column>
);

export default UserSnapshot;
