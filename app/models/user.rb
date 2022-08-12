class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :registerable,
         :recoverable,
         :rememberable,
         :validatable

  # has_many :friends, class_name: "friend", foreign_key: "reference_id"
  has_many :friends

  VALID_STATUSES = %w[public private archived]

  validates :state, inclusion: { in: VALID_STATUSES }

  def archived?
    state == 'archived'
  end
end
