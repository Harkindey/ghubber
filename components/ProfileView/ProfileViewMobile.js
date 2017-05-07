// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'components';

// import flow types
import type { UserEntity } from 'github-flow-js';

type Props = {
    user: UserEntity
};

export default class ProfileViewMobile extends PureComponent<void, Props, void> {
    render() {
        const { user } = this.props;

        return (
            <View style={styles.root}>
                <View style={styles.avatarWrapper}>
                    <Avatar user={user} size={250} />
                </View>
                <View style={styles.statsWrapper}>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Followers
                        </Text>
                        <Text>
                            {user.followers}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Repos
                        </Text>
                        <Text>
                            {user.public_repos}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Gists
                        </Text>
                        <Text>
                            {user.public_gists}
                        </Text>
                    </View>
                    <View style={styles.statsBlock}>
                        <Text style={styles.statsBlockTitle}>
                            Following
                        </Text>
                        <Text>
                            {user.following}
                        </Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.name} numberOfLines={1}>
                        { user.name }
                        <Text style={styles.login} numberOfLines={1}> @{ user.login }</Text>
                    </Text>
                    <Text>{ user.email }</Text>
                    <Text style={styles.bio}>{ user.bio }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    info: {
        flex: 1
    },
    avatarWrapper: {
        flex: 0.6,
            alignItems: 'center',
            justifyContent: 'center',
    },
    statsWrapper: {
        flex: 1,
            flexDirection: 'row',
            marginVertical: 15,
            padding: 5,
            backgroundColor: '#FFFFFF',
    },
    statsBlock: {
        flex: 0.25
    },
    statsBlockTitle: {
        fontWeight: 'bold'
    },
    name: {
        fontSize: 20
    },
    login: {
        fontSize: 18,
            fontWeight: 'bold'
    }
})