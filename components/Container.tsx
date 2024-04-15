import React from 'react';

interface ContainerProps {
  left?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ left = false, children }) => {
  return (
    <div className={`container ${left ? 'left' : ''}`}>
      {children}
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .left {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default Container;
