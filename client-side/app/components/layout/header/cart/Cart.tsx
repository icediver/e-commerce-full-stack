import { useMutation } from '@tanstack/react-query';
import cn from 'clsx';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';

import SquareButton from '@/ui/square-button/SquareButton';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useOutside';

import { formatToCurrency } from '@/utils/format-to-currency';

import styles from './Cart.module.scss';
import CartItem from './cart-item/CartItem';
import { PaymentService } from '@/services/PaymentService';


const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { ref, isShow, setIsShow } = useOutside(false);

	const { cart, total } = useCart();

	const { push } = useRouter();

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url);
			}
		}
	);

	return (
		<div className={styles['wrapper-cart']} ref={ref}>
			<SquareButton
				Icon={FiShoppingCart}
				onClick={() => {
					setIsShow(!isShow);
				}}
				number={5}
			/>
			<div className={styles.overflow}>
				<div
					className={cn(
						styles.modal,
						'menu',
						isShow ? 'open-menu' : 'close-menu'
					)}
				>
					<div className={styles.title}>My cart</div>

					<div className={styles.cart}>
						{cart.length ? (
							cart.map(item => <CartItem item={item} key={item.id} />)
						) : (
							<div>Basket is empty!</div>
						)}
					</div>

					<div className={styles.footer}>
						<div>Total:</div>
						<div>{formatToCurrency(total)}</div>
					</div>
					<div className={'text-center'}>
						<button className={'btn-link mt-5 mb-2'} onClick={() => mutate()}>
							Payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;