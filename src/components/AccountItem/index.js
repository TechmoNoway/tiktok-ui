import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
import styles from "./Account.module.scss"


const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/333474529_881008326442548_8675108297227892605_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wNd7G6gcdeAAX-WF8yF&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfDdt3IDel8T823BgUF5C04ub7fQw3SLG4nzDkuLu5LjYw&oe=646B0329"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Phú Lươn</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>phuluon2006</span>
            </div>
        </div>
    );
}

export default AccountItem;