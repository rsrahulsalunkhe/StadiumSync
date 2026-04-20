import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { profileSchema, type ProfileFormValues } from '@/lib/validations';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: '',
      phoneNumber: '',
      emergencyContact: {
        name: '',
        phone: '',
      },
    },
  });

  function onSubmit(values: ProfileFormValues) {
    console.log('Profile validated:', values);
    toast.success('Profile updated securely.');
  }

  return (
    <div className="mx-auto max-w-lg p-6">
      <Card>
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="displayName">Display Name</Label>
              <Input id="displayName" aria-invalid={!!errors.displayName} {...register('displayName')} />
              {errors.displayName && <p role="alert" className="text-xs text-red-500">{errors.displayName.message}</p>}
            </div>

            <div className="space-y-1">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input id="phoneNumber" placeholder="+1234567890" aria-invalid={!!errors.phoneNumber} {...register('phoneNumber')} />
              {errors.phoneNumber && <p role="alert" className="text-xs text-red-500">{errors.phoneNumber.message}</p>}
            </div>

            <div className="space-y-3 pt-4 border-t border-navy-700">
              <h3 className="text-sm font-semibold">Emergency Contact</h3>
              
              <div className="space-y-1">
                <Label htmlFor="emergencyName">Contact Name</Label>
                <Input id="emergencyName" aria-invalid={!!errors.emergencyContact?.name} {...register('emergencyContact.name')} />
                {errors.emergencyContact?.name && <p role="alert" className="text-xs text-red-500">{errors.emergencyContact.name.message}</p>}
              </div>

              <div className="space-y-1">
                <Label htmlFor="emergencyPhone">Contact Phone</Label>
                <Input id="emergencyPhone" placeholder="+1234567890" aria-invalid={!!errors.emergencyContact?.phone} {...register('emergencyContact.phone')} />
                {errors.emergencyContact?.phone && <p role="alert" className="text-xs text-red-500">{errors.emergencyContact.phone.message}</p>}
              </div>
            </div>

            <Button type="submit" className="w-full">Save Changes</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
