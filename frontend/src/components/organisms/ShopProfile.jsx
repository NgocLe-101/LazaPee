import { useEffect, useState } from 'react';
import LargeTextInputField from '../atoms/LargeTextInputField';
import TextInput from '../atoms/TextInput';
import InputField from '../molecules/InputField';
import ShopImagePanel from '../molecules/ShopImagePanel';
import ShopTitleSection from '../molecules/ShopTitleSection';
import SidebarMaincontentLayout from '../templates/SidebarMaincontentLayout';
import { Button } from '../ui/button';
import TemporaryClosureDialog from '../molecules/TemporaryClosureDialog';
import { get } from '../../api/config';
import ValueConverter from '../../helpers/ValueConverter';
import LoadingSpinner from '../atoms/LoadingSpinner';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';

function ShopProfile() {
  const [shopInfo, setShopInfo] = useState({
    shopName: '',
    shopImage: 'https://via.placeholder.com/150',
    shopDescription: '',
    joinDate: '',
    state: {
      active: false,
      returnDate: '',
    },
  });
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const fetchData = async () => {
    // Fetch shop info here
    const response = await get('/shop/detail');
    setShopInfo({
      shopName: response.data.shopInfo.shopName,
      shopImage: response.data.userInfo.avatar,
      shopCover: response.data.shopInfo.background,
      shopDescription: response.data.shopInfo.description,
      joinDate: ValueConverter.formatDateTime(response.data.shopInfo.createdAt),
      state: {
        active: response.data.shopInfo.status === 'open' ? true : false,
        returnDate: null,
      },
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const file = formData.get('background');
    if (!file || file.name === '') {
      // User haven't uploaded a new image
      formData.delete('background');
    }
    // Submit form data here
    try {
      const response = await fetch(
        'https://lazapee-jivl.onrender.com/shop/update',
        {
          method: 'PATCH',
          body: formData,
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (response.ok) {
        toast.success('Cập nhật thông tin shop thành công', {
          className: 'bg-green-500 text-white',
          position: 'top-right',
          closeButton: true,
        });
      } else {
        toast.error('Có lỗi xảy ra khi cập nhật thông tin shop', {
          className: 'bg-red-500 text-white',
          position: 'top-right',
          closeButton: true,
        });
      }
    } catch (err) {
      console.error('Error updating shop info:', err);
      toast.error('Có lỗi xảy ra khi cập nhật thông tin shop', {
        className: 'bg-red-500 text-white',
        position: 'top-right',
        closeButton: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    // Change shop cover image
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setShopInfo({ ...shopInfo, shopCover: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <SidebarMaincontentLayout>
      <div className='space-y-6'>
        <h1 className='font-display text-3xl font-semibold'>Thông tin shop</h1>
        <form onSubmit={handleSubmit} type='multipart/form-data' method='POST'>
          <ShopTitleSection title={'Thông tin cơ bản'} className='w-full'>
            <div className='grid grid-cols-3 gap-4'>
              <ShopImagePanel
                shopInfo={shopInfo}
                onImageUpload={handleImageChange}
              />
              <div className='col-span-2 space-y-6'>
                <InputField title={'Tên shop'}>
                  <TextInput
                    placeholder='Nhập tên shop'
                    value={shopInfo.shopName}
                    name='shopName'
                    onChange={(e) =>
                      setShopInfo({ ...shopInfo, shopName: e.target.value })
                    }
                  />
                </InputField>
                <InputField title={'Mô tả shop'}>
                  <LargeTextInputField
                    name='description'
                    value={shopInfo.shopDescription}
                    onChange={(e) => {
                      setShopInfo({
                        ...shopInfo,
                        shopDescription: e.target.value,
                      });
                    }}
                    maxLength={500}
                    placeholder='Nhập mô tả hoặc thông tin về Shop của bạn tại đây'
                  />
                </InputField>
                <Button type='submit'>
                  {isLoading && <LoadingSpinner />}
                  Lưu thông tin
                </Button>
              </div>
            </div>
          </ShopTitleSection>
        </form>
        <ShopTitleSection title={'Trạng thái hoạt động'}>
          <p className='font-medium'>
            Trạng thái:{' '}
            <span
              className={`${shopInfo.state.active ? 'text-green-500' : 'text-red-500'}`}
            >
              {shopInfo.state.active ? 'Đang hoạt động' : 'Tạm nghỉ'}
            </span>
            {<br />}
            {!shopInfo.state.active && (
              <span>
                Shop sẽ hoạt động trở lại vào ngày {shopInfo.state.returnDate}
              </span>
            )}
          </p>
          {shopInfo.state.active && (
            <>
              <Button onClick={() => setOpen(true)}>Tạm nghỉ</Button>
              <TemporaryClosureDialog
                open={open}
                setOpen={setOpen}
                onConfirmed={() => setOpen(false)}
              />
            </>
          )}
        </ShopTitleSection>
      </div>
    </SidebarMaincontentLayout>
  );
}

export default ShopProfile;
