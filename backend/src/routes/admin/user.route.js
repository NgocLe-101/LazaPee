import { Router } from 'express';
import { getAllUsers, getUserById, getPermissionByUserId, changePermission, deleteUser } from '@/controllers/admin/user.controller';

const router = Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.get('/permission/:id', getPermissionByUserId);

router.post('/permission/:id', changePermission);

router.delete('/:id', deleteUser);

export default router;
