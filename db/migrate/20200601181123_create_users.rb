class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :fname, null: false 
      t.string :lname, null: false 
      t.string :email, null: false
      t.date :birthday, null: false
      t.string :gender, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :bio
      t.string :current_city
      t.string :workplace
      t.string :school
      t.string :hometown
      t.string :relationship_status

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
