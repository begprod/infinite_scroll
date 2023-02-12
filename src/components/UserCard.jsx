import React, { forwardRef } from 'react'

/**
 * User Card Component
 * @param props
 * @param {String} props.image
 * @param {String} props.email
 * @param {Object} props.name
 * @param {String} props.name.first
 * @param {String} props.name.last
 * @param ref
 * @returns {JSX.Element}
 */

function UserCardItem(props, ref) {
  return (
    <div
      className="w-full pt-10 bg-white border border-gray-200 rounded-lg shadow"
      ref={ref}
    >
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={props.image}
          alt={props.name.first}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{props.name.first} {props.name.last}</h5>
        <span className="text-sm text-gray-500">{props.email}</span>
      </div>
    </div>
  );
}

const UserCardRef = forwardRef((props, ref) => UserCardItem(props, ref));

UserCardRef.displayName = 'UserCard';
export const UserCard = React.memo(UserCardRef);
