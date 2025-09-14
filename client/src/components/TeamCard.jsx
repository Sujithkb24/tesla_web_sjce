import React from 'react';

const TeamCard = ({ team, isFlipped, onClick, isCategoryCard }) => {
  if (isCategoryCard) {
    return (
      <div
        className="w-[250px] h-[350px] flex items-center justify-center text-3xl font-bold bg-transparent"
        style={{ color: 'var(--color-gold)' }}
      >
        {team.name}
      </div>
    );
  }

  return (
    <div
      className="team-card relative w-[70vw] max-w-[280px] min-w-[220px] h-[50vh] min-h-[300px] cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`card-inner relative w-full h-full transform-style-preserve-3d ${isFlipped ? 'flipped' : ''}`}
      >
        <div
          className="card-front absolute inset-0 p-1 rounded-xl overflow-hidden shadow-xl"
          style={{
            backgroundColor: 'var(--color-white)',
            borderColor: 'var(--color-gold)',
            borderWidth: '2px',
          }}
        >
          <img
            src={team.image}
            alt={team.name}
            className="w-full h-2/3 object-cover rounded-xl"
            style={{
              borderColor: 'var(--color-gold)',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          />
          <div className="p-3 h-1/3 flex flex-col justify-start">
            <h3 style={{ color: 'var(--color-black)' }} className="text-2xl font-bold">
              {team.name}
            </h3>
            <p style={{ color: 'var(--color-gray)' }} className="text-lg">
              {team.role}
            </p>
          </div>
        </div>

        <div
          className="card-back absolute inset-0 rounded-xl p-6 border-2"
          style={{
            backgroundColor: 'var(--color-gold)',
            borderColor: 'var(--color-white)',
          }}
        >
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-black)' }}>
            {team.name}
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--color-black)' }}>
            {team.role}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--color-black)' }}>
            {team.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
