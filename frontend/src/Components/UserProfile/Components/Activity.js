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
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/jenny.jpg' />
                        <Feed.Content>
                            <Feed.Summary>
                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                            </Feed.Summary>
                            <Feed.Date content='1 day ago' />
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/molly.png' />
                        <Feed.Content>
                            <Feed.Summary>
                            You added <a>Molly Malone</a> as a friend.
                            </Feed.Summary>
                            <Feed.Date content='3 days ago' />
                        </Feed.Content>
                        </Feed.Event>

                        <Feed.Event>
                        <Feed.Label image='https://react.semantic-ui.com/assets/images/avatar/small/elliot.jpg' />
                        <Feed.Content>
                            <Feed.Summary>
                            You added <a>Elliot Baker</a> to your <a>musicians</a> group.
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
