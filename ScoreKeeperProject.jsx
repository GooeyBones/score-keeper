import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        team1: 'Team 1',
        team2: 'Team 2',
       
        t1Score: [0, 0, 0],
        t2Score: [0, 0, 0],
        index: 0,
        
        gameRecords: [
            {
                date: 'Date',
                team1FinalScore: 'Team 1 score',
                team2FinalScore: 'Team 2 Score',
            }
        ],
        
        playerRoster: [
            {
                team1Member: 'Team 1 Members',
                team2Member: 'Team 2 Members',
            },
            {
                team1Member: 'Greg Martin',
                team2Member: 'Jerall Hyubin',
            },
            {
                team1Member: 'Stacy Brach',
                team2Member: 'Paul Mark',
            },
            {
                team1Member: 'Tyrone Woods',
                team2Member: 'Phillis Willis',
            },
            {
                team1Member: 'Tom Brookes',
                team2Member: 'Stan Parks',
            },
            {
                team1Member: 'Fareem Manne',
                team2Member: 'Torted Tots',
            },
            {
                team1Member: 'Phil Swagger',
                team2Member: 'Mallory Harden',
            },
            {
                team1Member: 'Chris Pitts',
                team2Member: 'Carl Johnson',
            },
        ],
        
        teamNamePageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rostersPageDisplay: 'none',
        
        submittedTotals: 'Go back to the scoring screen and hit the Submit button!',
        dateInput: '',
    }
    //Team 1 Scoring Operations
    updatet1Flag = () => {
        this.setState({ 
            t1Score: [this.state.t1Score[0] + 1, this.state.t1Score[1], this.state.t1Score[2]],
        })
    }
    updatet1Elim = () => {
        this.setState({ 
            t1Score: [this.state.t1Score[0], this.state.t1Score[1] + 1, this.state.t1Score[2]],
        })
    }
    updatet1Round = () => {
        this.setState({ 
            t1Score: [this.state.t1Score[0], this.state.t1Score[1], this.state.t1Score[2] + 1],
        })
    }

    //Team 2 Scoring Operations
    updatet2Flag = () => {
        this.setState({ 
            t2Score: [this.state.t2Score[0] + 1, this.state.t2Score[1], this.state.t2Score[2]],
        })
    }
    updatet2Elim = () => {
        this.setState({ 
            t2Score: [this.state.t2Score[0], this.state.t2Score[1] + 1, this.state.t2Score[2]],
        })
    }
    updatet2Round = () => {
        this.setState({ 
            t2Score: [this.state.t2Score[0], this.state.t2Score[1], this.state.t2Score[2] + 1],
        })
    }

    handleTeamNamePagePress = () => this.setState(state => ({
        teamNamePageDisplay: 'block',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rostersPageDisplay: 'none',
    }));

    handleScoringPagePress = () => this.setState(state => ({
        teamNamePageDisplay: 'none',
        scoringPageDisplay: 'block',
        standingsPageDisplay: 'none',
        rostersPageDisplay: 'none',
    }));

    handleStandingsPagePress = () => this.setState(state => ({
        teamNamePageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'block',
        rostersPageDisplay: 'none',
    }));
    handleRostersPagePress = () => this.setState(state => ({
        teamNamePageDisplay: 'none',
        scoringPageDisplay: 'none',
        standingsPageDisplay: 'none',
        rostersPageDisplay: 'block',
    }));

    submit = () => {

        this.state.gameRecords.splice(this.state.gameRecords.length, 0, {
            date: this.state.dateInput,
            team1FinalScore: this.state.t1Score[0] + this.state.t1Score[1] + this.state.t1Score[2],
            team2FinalScore: this.state.t2Score[0] + this.state.t2Score[1] + this.state.t2Score[2],
        })
        
        this.setState({
            submittedTotals: this.state.team1 + '\n' + this.state.t1Score[0] + ' - ' + this.state.t1Score[1] + ' - ' + this.state.t1Score[2] + 
            '\n' + '\n' + this.state.team2 + '\n' + this.state.t2Score[0] + ' - ' + this.state.t2Score[1] + ' - ' + this.state.t2Score[2],
            t1Score: [0,0,0],
            t2Score: [0,0,0],
        }) 
    }

    handleTextChange = dateInput => {
        this.setState({ dateInput });
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBarTextContainer}>
                    <Text style={styles.topBarText}>
                    MLG Score Keeper
                    </Text>
                </View>
                <View style={{ display: this.state.teamNamePageDisplay}}>
                    <View style={styles.contentContainer}>
                    <ImageBackground
                        style={styles.background}
                        source={{ uri:'https://codehs.com/uploads/0c8473f0caffc7a4c7f18abfbfbc63a6' }}
                        >
                            <View style={styles.teamNameTextContainer}>
                                <Text style={styles.teamNameText}>
                                Change Team Names
                                </Text>
                            </View>
                            <View style={styles.team1Container}>
                                <View>
                                    <TextInput  style={styles.team1InputBox}
                                    onChangeText={(team1) => this.setState({team1})}
                                    value={this.state.team1}
                                    />
                                </View>
                            </View>
                        
                            <View style={styles.team2Container}>
                                <View>
                                    <TextInput style={styles.team2InputBox}
                                    onChangeText={(team2) => this.setState({team2})}
                                    value={this.state.team2}
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    
                    </View>
                </View>
                
                <View style={{ display: this.state.scoringPageDisplay}}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                        style={styles.background}
                        source={{ uri: 'https://codehs.com/uploads/0c8473f0caffc7a4c7f18abfbfbc63a6' }}
                        >   
                            <View style={styles.buttonContainerBothTeams}>
                                <View style={styles.buttonContainer}>
                                    <TouchableHighlight style={styles.button1}onPress={this.updatet1Flag}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team1 + ' Flag Cap'}
                                        </Text>
                                    </TouchableHighlight>
                            
                                    <TouchableHighlight style={styles.button1}onPress={this.updatet1Elim}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team1 + ' Elimination'}
                                        </Text>
                                    </TouchableHighlight>
                        
                                    <TouchableHighlight style={styles.button1}onPress={this.updatet1Round}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team1 + ' Round Win'}
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                    
                                <View style={styles.buttonContainer}>
                                    <TouchableHighlight style={styles.button2}onPress={this.updatet2Flag}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team2 + ' Flag Cap'}
                                        </Text>
                                    </TouchableHighlight>
                        
                                    <TouchableHighlight style={styles.button2}onPress={this.updatet2Elim}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team2 + ' Elimination'}
                                        </Text>
                                    </TouchableHighlight>
                        
                                    <TouchableHighlight style={styles.button2}onPress={this.updatet2Round}>
                                        <Text style={styles.buttonText}>
                                        {this.state.team2 + ' Round Win'}
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={styles.statsTextContainer}>
                                <Text style={styles.paragraph}>
                                Stats
                                </Text>
                            </View>
                    
                            <View style={styles.statsContainer}>
                                <Text style={styles.statsText}>
                                {this.state.team1 + '\n' + ' Score: ' + (this.state.t1Score[0] + this.state.t1Score[1] + this.state.t1Score[2])}
                                </Text>
                                <Text style={styles.statsText}>
                                {this.state.team2 + '\n' + ' Score: ' + (this.state.t2Score[0] + this.state.t2Score[1] + this.state.t2Score[2])}
                                </Text>
                                
                            </View>
                            <View style={styles.submitContainer}>
                                <View style={styles.dateInputContainer}>
                                    <TextInput
                                        value={this.state.dateInput}
                                        onChangeText={this.handleTextChange}
                                        style={styles.dateInput}
                                    />
                                    
                                </View>
                                <View style={styles.submitButtonContainer}>
                                    
                                    <TouchableHighlight style={styles.submitButton} onPress={this.submit}>
                                        <View style={styles.submitButtonBacking}>
                                            <Text style={styles.submitButtonText}>
                                            Submit
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            
                        </ImageBackground>
                    </View>
                </View>
                
                <View style={{ display: this.state.standingsPageDisplay}}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri:'https://codehs.com/uploads/0c8473f0caffc7a4c7f18abfbfbc63a6' }}
                        >
                            <View style={styles.standingsTextContainer}>
                                <Text style={styles.standingsText}>
                                    {'Standings:\n' + '\n'}
                                </Text>
                                <Text style={styles.standingsText}>
                                    {this.state.submittedTotals}
                                </Text>
                            </View>
                        
                            <View style={styles.dateLogContainer}>
                            <ScrollView>
                                {this.state.gameRecords.map((record) => (
                                    <View style={styles.standingsDateLogContainer}>
                                        <View style={styles.dateStandingsTextContainer}>
                                            <Text style={styles.dateStandingsText}>
                                            {record.date}
                                            </Text>
                                        </View>
                                        <View style={styles.dateStandingsTextContainer}>
                                            <Text style={styles.dateStandingsText}>
                                            {record.team1FinalScore}
                                            </Text>
                                        </View>
                                        <View style={styles.dateStandingsTextContainer}>
                                            <Text style={styles.dateStandingsText}>
                                            {record.team2FinalScore}
                                            </Text>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                            </View>
                        </ImageBackground>
                    
                    </View>
                </View>
                <View style={{ display: this.state.rostersPageDisplay}}>
                    <View style={styles.contentContainer}>
                        <ImageBackground
                            style={styles.background}
                            source={{ uri:'https://codehs.com/uploads/0c8473f0caffc7a4c7f18abfbfbc63a6' }}
                        >
                        <ScrollView>
                            <View style={styles.rosterContainer}>
                                {this.state.playerRoster.map((player) => ( 
                                <Text style={styles.team1MembersText}>
                                    {player.team1Member}
                                </Text>
                                ))}
                                {this.state.playerRoster.map((player) => (
                                <Text style={styles.team2MembersText}>
                                    {player.team2Member}
                                </Text>
                                ))}
                            </View>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.navbarContainer}>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleTeamNamePagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Team Names
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    
                    onPress={this.handleScoringPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Scoring
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                        onPress={this.handleStandingsPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Standings
                        </Text>
                    
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleRostersPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Rosters
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'blue',
    },
    topBarTextContainer:{
        height: deviceHeight/10,
        backgroundColor: 'red',
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderColor: 'darkred',
    },
    topBarText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    navbarContainer: {
        height: deviceHeight/10,
        width: deviceWidth,
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: 'darkred',
        borderTopRightRadius: 30,
    },
    navButton: {
        flex: 1,
        height: 40,
        backgroundColor: 'blue',
        margin: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    navButtonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    
    contentContainer: {
        height: 8*(deviceHeight/10),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    background: {
        height:  8*(deviceHeight/10),
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        height: deviceHeight/4,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        backgroundColor: 'red',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 20,
        borderRadius: 20,
    },
    teamNameTextContainer: {
        width:9*(deviceWidth/10),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        margin: 5,
    },
    teamNameText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        margin: 5,
    },
    statsTextContainer: {
        flex: 1,
        width: deviceWidth,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 20,
    },
    statsContainer: {
        flex: 3,
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 20,
    },
    team1Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        width:9*(deviceWidth/10),
        margin: 5,
        height: deviceHeight/10,
    },
    team1InputBox: {
        fontSize: 20,
        height: deviceHeight/10,
        width:9*(deviceWidth/10),
        backgroundColor: '#fdd6d3',
    },
    team2Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#86cbff',
        width:9*(deviceWidth/10),
        margin: 5,
        height: deviceHeight/10,
    },
    team2InputBox: {
        fontSize: 20,
        height: deviceHeight/10,
        width:9*(deviceWidth/10),
        backgroundColor: '#cfe2f3',
    },
    statsText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingRight: 10,
        width: '50%',
    },
    buttonContainerBothTeams: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: deviceWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button1: {
        height: deviceHeight/10,
        width: deviceWidth/3.5,
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 10,
    },
    button2: {
        height: deviceHeight/10,
        width: deviceWidth/3.5,
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',
    },
    submitContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    dateInputContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateInput: { 
        height: 30,
        width: 200,
        backgroundColor: 'white',
        fontSize: 26,
    },
    submitButtonContainer: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid white',
        borderRadius: 10,
        margin: 5,
    },
    submitButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonBacking: {
    //TODO: Define  
    },
    submitButtonText: {
        color: 'white',
        fontSize: 20,
    },
    standingsTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 20,
        border: '1px solid black',
        padding: 10,
        width: deviceWidth,
    },
    standingsText: {
        
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
    },
    dateLogContainer: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: deviceWidth,
        border: '1px solid white',
    },
    standingsDateLogContainer: {
     
        width: deviceWidth,
        flexDirection: 'row',
    },
    dateStandingsTextContainer: {
        alignItems: 'center',
        width: 100,
    },
    dateStandingsText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    rosterContainer: {
        flex: 1,
        width: deviceWidth,
    },
    team1MembersText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#ff746a',
    },
    team2MembersText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        backgroundColor: '#77c5ff',
    },
});