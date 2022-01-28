import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'column',
        backgroundColor: '#eee',
    },
    pageWrap: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        fontSize: 50,
    },
    
    headWrap: {
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    headArea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        padding: 14,
    },
    headText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    bodyWrap_TM: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        backgroundColor: 'white',
    },
    bodyArea_TM: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'stretch',
    },

    bodyWrap_SM: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 0,
        backgroundColor: 'white',
    },
    bodyArea_SM: {
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        margin: 0,
    },
    bodyColumn_SM: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: 'white',
    },

    bodyWrap_TD: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderWidth: 1,
    },
    bodyArea_TD: {
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 40,
        marginVertical: 40,
        borderWidth: 1,
    },
    
    TD_controlWrap: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 10,
        borderWidth: 1,
    },

    bodyWrap_Welcome: {
        flex: 1,
        flexDirection: 'column',
        paddingVertical: 60,
    },

    
    bodyArea: {
        flex: 1,
        alignItems: 'center',
    },
    bodyText: {
        fontSize: 18,
        backgroundColor: 'yellow',
        textAlign: 'center',
    },

    footerWrap: {
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: '#eee',
    },
    footerArea: {
        alignItems: 'center',
    },

    rectButton: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 20,
    },

    rTB_TN: {
        width: 100,
        height: 40,
        alignItems: 'center',
    },

    enterButton: {
        backgroundColor: 'lightblue',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
    enterButtonText: {
        fontWeight: 'bold',
        fontSize: 30,
    },

    roundButton: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    rB_100: {
        height: 80,
        width: 80,
    },
    rB_40: {
        height:60,
        width: 60,
    },
    rB_pushright: {
        marginRight: 14,
    },

    cardArea: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'lightblue',
        marginVertical: 6,
        marginHorizontal: 2,
        padding: 12,
        
    },
    cardText: {
        fontSize: 16,
    },

    sample_chart: {
        height: 180,
        width: 180,
        borderRadius: 200,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
    },

    b_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    }
})