import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch, useStore} from 'react-redux';
import {colors} from '~/components/config';
import {getToast} from '~helpers';
import {SignOut} from '~/store/Actions';
import {AuthControl} from '~utils';
import styles from './styles';
const ProfileScreen = () => {
  //selected field from global state
  const loading = useSelector(state => state.SignOutReducer.loading);
  const error = useSelector(state => state.SignOutReducer.error);
  //dispatch
  const dispatch = useDispatch();
  //local state
  const [isloading, setIsloading] = useState(false);
  //global store
  const store = useStore();
  //submit func
  const logOut = async () => {
    setIsloading(true);
    //dispatch
    await dispatch(SignOut());
    //remove storage userId
    await AuthControl.removeUserId();
    //get toast
    getToast(false, 'logout successful');
    setIsloading(false);
  };
  return (
    <View style={styles.Container}>
      <Text>ProfileScreen</Text>
      {isloading ? (
        <ActivityIndicator size="large" color={colors.MainPink} />
      ) : (
        <TouchableOpacity style={styles.Button} onPress={logOut}>
          <Text style={styles.ButtonText}>SignOut</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ProfileScreen;
