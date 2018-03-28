import React from 'react';
import { Container, Card, Feed } from 'semantic-ui-react';

class Activity extends React.Component {

    render() {
        return (
            <Container fluid>
                <Card fluid color="pink">
                    <Card.Content>
                    <Card.Header>
                        Recent Activity
                    </Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Feed>
                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg' />
                        <Feed.Content>
                            <Feed.Summary>
                                You paid <a>@Aiden Shih</a> $5.00 for the groceries.
                            </Feed.Summary>
                            <Feed.Date content='1 day ago' />
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/matthew.png' />
                        <Feed.Content>
                            <Feed.Summary>
                                You completed your 'Take out the trash' task.
                            </Feed.Summary>
                            <Feed.Date content='3 days ago' />
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/daniel.jpg' />
                        <Feed.Content>
                            <Feed.Summary>
                                <a>@Benjy</a> paid you $10.00 for the 'buy snacks for the game' expense.
                            </Feed.Summary>
                            <Feed.Date content='4 days ago' />
                        </Feed.Content>
                        </Feed.Event>
                    </Feed>
                    </Card.Content>
                </Card>
            </Container>
        );
    }
}

export default Activity;
