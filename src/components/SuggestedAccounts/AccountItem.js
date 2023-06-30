import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import AccountPreview from './AccountPreview';
import { Wrapper as ProperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </ProperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[0, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/c9705f1e16aebafff2fd214f481f14e6.jpeg?x-expires=1688234400&x-signature=hRxsjq5FpCmQZAPD2kHM5HZjYdE%3D"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={'nickname'}>
                            <strong>changtph</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={'name'}>Huyền Chang</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
