import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c9705f1e16aebafff2fd214f481f14e6.jpeg?x-expires=1688234400&x-signature=hRxsjq5FpCmQZAPD2kHM5HZjYdE%3D"
                alt=""
            ></img>
            <div className={cx('item-info')}>
                <p className={'nickname'}>
                    <strong>changtph</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={'name'}>Huyền Chang</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
