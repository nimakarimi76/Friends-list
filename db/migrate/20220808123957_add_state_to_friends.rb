class AddStateToFriends < ActiveRecord::Migration[7.0]
  def change
    add_column :friends, :state, :string
  end
end
