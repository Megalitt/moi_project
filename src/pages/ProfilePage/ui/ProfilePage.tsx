import { ProfileCard, fetchProfileData, getProfileData, getProfileError, getProfileLoading, getProfileReadonly, getProfileValidateError, profileActions, profileReducer } from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';

interface ProfilePageProps {
  className?: string;

}

const reducers: ReducersList = {
  profile: profileReducer,
}

const ProfilePage = ({className}: ProfilePageProps) => {
  const {t} = useTranslation('profile');
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateError = useSelector(getProfileValidateError);
  const {id} = useParams<{id: string}>();
  
  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
  };

  useInitialEffect(() => {
    if(id){
      dispatch(fetchProfileData(id));
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({first: value || ''}))
  }, [dispatch]);
  
  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({lastname: value || ''}))
  }, [dispatch]);
  
  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({age: Number(value || 0)}))
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({city: value || ''}))
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({username: value || ''}))
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfil({avatar: value || ''}))
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileActions.updateProfil({currency}))
  }, [dispatch]);

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileActions.updateProfil({country}))
  }, [dispatch]);



  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page className={classNames('', {}, [className])}>
        <VStack max gap='16'>
          <ProfilePageHeader/>
        {validateError?.length && validateError.map((err: any) => (
          <Text
            theme={TextTheme.ERROR}
            text={err}
            key={err}
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
        </VStack>
        
      </Page>
    </DynamicModuleLoader>
    
  );
};

export default ProfilePage
