class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false 
      t.boolean :status, default: false 

      t.timestamps
    end

    add_index :friend_requests, :requester_id
    add_index :friend_requests, :requestee_id
  end
end
