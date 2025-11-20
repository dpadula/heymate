import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function Step1Screen() {
  return (
    <View style={{ padding: 24 }}>
      <Text style={{ fontSize: 24 }}>¿Querés recordatorios inteligentes?</Text>
      <Text style={{ marginTop: 12 }}>
        Activá permisos para clima y ubicación.
      </Text>
      <Button
        title='Continuar'
        onPress={() => router.push('/(onboarding)/step1')} //cambiar a step2
      />
    </View>
  );
}
